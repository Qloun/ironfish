/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
import * as yup from 'yup'
import { AccountImport } from '../../../wallet/account'
import { ApiNamespace, router } from '../router'
import bs58safe from 'bs58check-ts'

export type ImportAccountBase58Request = {
  account: AccountImport
  rescan?: boolean
}

export type ImportAccountBase58Response = {
  name: string
  isDefaultAccount: boolean
}

export const ImportAccountBase58RequestSchema: yup.ObjectSchema<ImportAccountBase58Request> = yup
  .object({
    rescan: yup.boolean().optional().default(true),
    account: yup
      .object({
        name: yup.string().defined(),
        spendingKey: yup.string().defined(),
      })
      .defined(),
  })
  .defined()

export const ImportAccountBase58ResponseSchema: yup.ObjectSchema<ImportAccountBase58Response> = yup
  .object({
    name: yup.string().defined(),
    isDefaultAccount: yup.boolean().defined(),
  })
  .defined()

router.register<typeof ImportAccountBase58RequestSchema, ImportAccountBase58Response>(
  `${ApiNamespace.wallet}/importAccountBase58`,
  ImportAccountBase58RequestSchema,
  async (request, node): Promise<void> => {
    request.data.account.spendingKey = bs58safe.decode(request.data.account.spendingKey).toString('hex')
    const account = await node.wallet.importAccount(request.data.account)

    if (request.data.rescan) {
      void node.wallet.scanTransactions()
    } else {
      await node.wallet.skipRescan(account)
    }

    let isDefaultAccount = false
    if (!node.wallet.hasDefaultAccount) {
      await node.wallet.setDefaultAccount(account.name)
      isDefaultAccount = true
    }

    request.end({
      name: account.name,
      isDefaultAccount,
    })
  },
)
