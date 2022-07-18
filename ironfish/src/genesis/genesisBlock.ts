/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

export const genesisBlockData = `
{
  "header": {
    "sequence": 1,
    "previousBlockHash": "0000000000000000000000000000000000000000000000000000000000000000",
    "noteCommitment": {
      "commitment": {
        "type": "Buffer",
        "data": "base64:9a2VETm/ClnCB1maBfUTQxq49/meVbMbvsqJfMnILws="
      },
      "size": 3
    },
    "nullifierCommitment": {
      "commitment": "C468A0D003C82115712364F7EA21B45AEF4CC5FD79FDB0D0753EEEF83B71438D",
      "size": 1
    },
    "target": "883423532389192164791648750371459257913741948437809479060803100646309888",
    "randomness": "0",
    "timestamp": 1658184498082,
    "minersFee": "0",
    "work": "0",
    "hash": "087FCC20247CB4FF436BE47D151666D97D48AF154CAA01EFC554C1C1CB56E5A9",
    "graffiti": "67656E6573697300000000000000000000000000000000000000000000000000"
  },
  "transactions": [
    {
      "type": "Buffer",
      "data": "base64:AAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAI3Y+ke3juMqsu48azLWxRtYubl7AXEf5nzf0noSXwKu9IThtN2YYXiaaFqvzagBbashot3u0pQMWCgVbHPv4BXA+TyZ3aEu3THWDTBaclcBlJmwnhlIgX4JQNPQoGNFVgjIzmIoYBONfIBz/k9frxUJOgmqM+9dION8AkrWhD3oxQYID7cNgpN0CzlxLwBY/6K7KdR1d+d7RuQ6wC9mQ1/0Gj+RqtU3TqXU+pmj40V+arD92WUnL73GhWQ23oPWxPqR4aGoMqvUiCpQVNQmfoc6DOH8W7VxbQdpt1QiP0wEyCAuPadVW42JbdM4LadtF0az5K21OBqPmh7lJ0QEgyZlObQlDkj8GQRSx06s8+xvMThkpHWDGRELh4QZt+iWDeqLWHkJFI8q1KpIoUplMalRrfkycKczwhGC8Kec8lMIV9pfeVTZN51xT7Xe2yIu3bpeUaRL2NtIS7sDMueJlGiEM2msFrbywYQIdCThSUlZliPeDJLievPD15ZIxfTnocIDFEJlYW5zdGFsayBub3RlIGVuY3J5cHRpb24gbWluZXIga2V5MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwp1xLYj6gtl/hVPXc2LRcN8lZLesNbEzoRBJbfh2ZlnBrEuEqnzk02fvauOHFposhZNQOiX7q4zlBiQ2qFuhFAgE="
    },
    {
      "type": "Buffer",
      "data": "base64:AAAAAAAAAAABAAAAAAAAAACA8UsfFPH/AAAAALKVdhA5MU3Pr+RlKYzhzNdMZ+RRDwev4bavZY9hjK2qViS11GIDNa7kmKdhOBukpq14Y6cDiwl4yhl/iRlnIGlw30X/Qye4vaEPC/uIJ8QYNs9Hzgm5VFOZEjlz4qEOXxBvDBrRF99b8tFl0iciYIhXWJQaAYysKbTcULz8Ho9e5VXq0FFyW0WISkk0IE1yo7apZ7nVwF69CnpVvjZtLWBZE3UwHrv1xZIoqgwR+jvqVcPlKWq0Wj5eb/+dpnbMAzkit4+XKW7LL8p6jVlIGxI0znfw3eBg3f/cOqISTwjr03AxUJXUv1LlDg5y3CUE/MRcMRLavk1jpXLFC/WWhzqZSZ3gQdzIICrr79sUguq2L2sno0RtjvGHvb3EDBArQYzpjbxE/66OSoVZPiNwFJd68i9uo+arKtTeWZ1uWIDHIvnHKaCS3zkQOQtTEDmS9xYghiMAYHsPaEjgXFBfxPb4nenB03mcaT8mos1+/XIYUWC7WfQhQQPYeaMfMb6isEqLc0JlYW5zdGFsayBub3RlIGVuY3J5cHRpb24gbWluZXIga2V5MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwvr9mG72Ds0A5TzOrM3YOsICX1u1ovCYgD7M7HSjRmyhcfaM9RQTtCdUC8wa/3m6nwwRDR5pNxL4lSG4xqqBgCwA="
    },
    {
      "type": "Buffer",
      "data": "base64:AQAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAKORTujmyoUXMl92Lyqo4I1aPG56IUraTAtRGr3g59QK//xwuIFQxhwPbVrLrub21rmhxmpy5q2pYy0IyWZDpBeG0dYzR36fMtOlEsHMPCK6lYiG7YgLfTnieINqKpylyBd2ohMZ+Yf3eRNkrtmdBNLlvz2mCZrHK5HjXJ9CLSz86Hev9hOX83aO1tVwPOkJP6sWsfUTmxVssLGuhqhaq4xh40Sk5QoFWe9KHCr+eXTyGgIo2rgRsYn2Au+Dwzq5zVtqw11iyTfE1xSw6AgfsgD8yjbYtKPfyTUzLPhi5t5B+E1Q9umfAY7jgXrG6JEJIlVZrbCNAwbnisiU11LkSUoY7c2yWKTA5+w8d/MGX3zEBnJjs8k5jb8zTN3e1CRBaQIAAABmaB3T2RAZHcpL7gFDoaPqI41DawtkOfAc11QYr3xzhnuiAw5AtbPy3FQ40Yl+KV9x4G6nOjKuoLL41B+qZtCfGXbe58eVVWraUCbwNChjk22Top9eskKZFahZch9tGQyoF0P6rUfGlZMDyXQ2cLIQ66Xf3fUtTzjGdvLju/9dB25kd6Lh8WBCKSSCxfRhEHCBQGgbXtsuYHo/JI8ADn44s2M78uUVwyyhyCt02Hapmru3tR6WrK2zlKiibQRHHGwPK7ePLHQ/kFwEDSa3kKEKY099fVpR8I5HSlwClNWgqV33olHPM6Vkc2G5LSiLKECOF90eM0mCsfnDVpgSkrP12a3ZUUXqtgM05uqjqn5cGyCG+2IWEtwlLyIGTD4QhPlN8Fgy4ZdB434Tce0mlI4FdMTbLyfMazucpfkAuHUcpZ5GfENL9oNb0EpuaI+ejNnZRFxqSb82FSFc31ekWW9AMgONIOLPi8DqFMu7s3BsC1/JTEW00nX8QgYS5a1Ta4khQc1ADEoQLx4kNxSyD4nlgVF710mrgmBi29Jmrx1q3YEeRksuTR548JuLJBPAONKAljlPZDm2WkNzsqhejFp2j7glUgWlO/bGKHfFgzs34/Ol5xSClSdRgJmQuUlXeaqCQ4cG/XH6xdMrr06f20REjkq4cvDmSzLu3AB39GAdEw8j+QiA4pM1gWpXXmIX9oNv0rhXTGGA6s5d/rFOh5BS+kwKMh3Tt4Qzv34hxxXr1e9+GT9TxIRcd+vP7U7p+129+Pudv4lhlZbEgmDKPiXdjR1hr734WqZDja+5OsNZ1sP4yAlRb4Unz5WdcM+S/7TubQUA"
    }
  ]
}
`
