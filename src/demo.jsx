import React, { useEffect, useState } from 'react'

export default function Demo() {
    const [state, setstate] = useState()
    const TempArrayc = [{ "hasthubnail": false, "id": 68, "img": null, "key": "a", "number": "4526362658", "value": "abc xyz" }, { "hasthubnail": false, "id": 69, "img": null, "key": "v", "number": "4526362657", "value": "vvvv vvv" }, { "hasthubnail": false, "id": 70, "img": null, "key": "i", "number": "6532984582", "value": "iii iii" }, { "hasthubnail": false, "id": 71, "img": null, "key": "g", "number": "4526362655", "value": "gggg gggg" }, { "hasthubnail": false, "id": 72, "img": null, "key": "b", "number": "3254148569", "value": "bcda pppp" }, { "hasthubnail": false, "id": 73, "img": null, "key": "t", "number": "3256958510", "value": "ttt ttt" }, { "hasthubnail": false, "id": 74, "img": null, "key": "u", "number": "3251456985", "value": "ubvcl pppw" }, { "hasthubnail": false, "id": 75, "img": null, "key": "m", "number": "3656985874", "value": "mbcd aaaa" }, { "hasthubnail": false, "id": 76, "img": null, "key": "a", "number": "6598569525", "value": "a b" }, { "hasthubnail": false, "id": 77, "img": null, "key": "a", "number": "6532659858", "value": "abcd z" }, { "hasthubnail": false, "id": 78, "img": null, "key": "A", "number": "2036741258", "value": "Abcd gh dd" }, { "hasthubnail": false, "id": 79, "img": null, "key": "D", "number": "3254148560", "value": "Dev Dev" }]

    useEffect(() => {
        const data = TempArrayc.filter((e) => {
            return (e.value.toLowerCase().includes(state?.length > 0 ? state.toLowerCase() : ""))
        })

console.log(data,"kkkkkkk")
    }, [state])
    return (
        <div>
            <h1>hiiii</h1>
<input type="text" onChange={e=> setstate(e.target.value)} />
        </div>
    )
}
