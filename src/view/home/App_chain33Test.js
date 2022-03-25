import React, { memo } from "react";
import requestConfig from "@/service/requestConfig";
function App_chain33test() {
    const NewAccount = async () => {
        const data = {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "Chain33.NewAccount",
            "params": [{ "label": "gxk" }]
        };
        return await requestConfig.chain33Request(data);
    };
    const GetBalance = async () => {
        const data = {
            id: 1,
            method: "Chain33.GetBalance",
            params: [
                {
                    addresses: [
                        "1MgYUGtAGzkrK1dw3xCTtpm9LFMd6EtGsf"
                    ],
                    execer: 'coins',
                    asset_exec: 'coins',
                    asset_symbol: 'bty'
                }
            ]
        };
        const result = await requestConfig.chain33Request(data);
        console.log('余额为：', (result.data.result[0].balance) / 100000000);
    };
    const Transaction = async () => {
        const CreateRawTransaction = async () => {
            const data = {
                jsonrpc: "2.0",
                id: 1,
                method: "Chain33.CreateRawTransaction",
                params: [
                    {
                        to: "197dkq44mtjiPoLVsBN9GdXUABJuzvAzzA",
                        amount: 1 * 1e5,
                        fee: 1 * 1e5,
                        // "note":"string",
                        // "isToken":bool,
                        isWithdraw: false,
                        // "tokenSymbol":"string",
                        // "execName":"string"
                        execer: 'coins'
                    }
                ]
            };
            return await requestConfig.chain33Request(data);
        };
        const SignRawTx = async (preString) => {
            const data = {
                "jsonrpc": "2.0",
                "id": 1,
                "method": "Chain33.SignRawTx",
                "params": [
                    {
                        // "addr":"",
                        "privkey": "6416228d48754de4c394d21287fd2fa8cc0165cd00e863d1edd78feae71fc8b3",
                        "txHex": preString,
                        "expire": "300s",
                        "index": 1,
                        // "token":"string",
                        "fee": 1 * 1e5,
                        // "newToAddr":"string"
                    }
                ]
            };
            return await requestConfig.chain33Request(data);
        };
        const SendTransaction = async (preString) => {
            const data = {
                "jsonrpc": "2.0",
                "id": 1,
                "method": "Chain33.SendTransaction",
                "params": [{ "data": preString, "token": "" }]
            };
            return await requestConfig.chain33Request(data);
        };
        const CreateRawTransactionResult = await CreateRawTransaction();
        const SignRawTxResult = await SignRawTx(CreateRawTransactionResult.data.result);
        return await SendTransaction(SignRawTxResult.data.result);
    };
    const GetTxByAddr = async () => {
        const data = {
            jsonrpc: "2.0",
            id: 1,
            method: "Chain33.GetTxByAddr",
            params: [
                {
                    addr: "1K7Fko7e21F2qXdYriVLheJue5ZW5KerZL",
                    flag: 0,
                    count: 10,
                    direction: 0,
                    // "height":int64,
                    // "index":int64
                }
            ]
        };
        await requestConfig.chain33Request(data);
    };
    const GetTxByHash = async () => {
        const data = {
            "jsonrpc": "2.0",
            "id": 1,
            "method": "Chain33.QueryTransaction",
            "params": [{ "hash": "0x5755f072e06f8995eef5245e4853906e2bf4d6c8b97c320065269f8290297750" }]
        };
        return await requestConfig.chain33Request(data);
    };
    return (React.createElement("div", null,
        React.createElement("div", { className: " text-3xl text-center text-app-orange" }, "chain33_test"),
        React.createElement("div", { className: " text-center cursor-pointer text-xl text-font-red", onClick: () => { NewAccount(); } }, "\u521B\u5EFA\u8D26\u6237(\u5931\u8D25)"),
        React.createElement("div", { className: " text-center cursor-pointer text-xl text-font-red", onClick: () => { GetBalance(); } }, "\u67E5\u8BE2\u4F59\u989D"),
        React.createElement("div", { className: " text-center cursor-pointer text-xl text-font-red", onClick: () => { Transaction(); } }, "\u5B8C\u6574\u4EA4\u6613"),
        React.createElement("div", { className: " text-center cursor-pointer text-xl text-font-red", onClick: () => { GetTxByAddr(); } }, "\u6839\u636E\u5730\u5740\u67E5\u8BE2\u4EA4\u6613\u4FE1\u606F(\u5931\u8D25)"),
        React.createElement("div", { className: " text-center cursor-pointer text-xl text-font-red", onClick: () => { GetTxByHash(); } }, "\u6839\u636EHASH\u67E5\u8BE2\u4EA4\u6613\u4FE1\u606F")));
}
export default memo(App_chain33test);
//# sourceMappingURL=App_chain33Test.js.map