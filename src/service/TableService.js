export default class TableService {

    getData() {
        return fetch("http://localhost:8080/file_uploader/save").then(res => res.json())
    }

    getDataMock() {
        return {
            "data": [
                {
                    "2020": {
                        "Abril": [
                            {
                                "cantDeclarada": 1.0,
                                "precioUnitarioDolares": 80642.7,
                                "fobTotalDolares": 80642.7,
                                "cif": 83455.93,
                                "codVenta": "CIP"
                            },
                            {
                                "cantDeclarada": 105.0,
                                "precioUnitarioDolares": 1692100.8520000002,
                                "fobTotalDolares": 3080449.54,
                                "cif": 3209423.6700000004,
                                "codVenta": "FOB"
                            },
                            {
                                "cantDeclarada": 21.0,
                                "precioUnitarioDolares": 1146575.9000000001,
                                "fobTotalDolares": 1399047.2300000002,
                                "cif": 1448657.1300000001,
                                "codVenta": "CFR"
                            },
                            {
                                "cantDeclarada": 1.0,
                                "precioUnitarioDolares": 110916.18,
                                "fobTotalDolares": 110916.18,
                                "cif": 113221.39,
                                "codVenta": "DAT"
                            },
                            {
                                "cantDeclarada": 9.0,
                                "precioUnitarioDolares": 531345.85,
                                "fobTotalDolares": 531345.85,
                                "cif": 565035.5,
                                "codVenta": "EXW"
                            },
                            {
                                "cantDeclarada": 5.0,
                                "precioUnitarioDolares": 495000.0,
                                "fobTotalDolares": 495000.0,
                                "cif": 506464.5,
                                "codVenta": "CPT"
                            },
                            {
                                "cantDeclarada": 35.0,
                                "precioUnitarioDolares": 1983681.1230000001,
                                "fobTotalDolares": 2584798.09,
                                "cif": 2738184.15,
                                "codVenta": "CIF"
                            }
                        ],
                        "Marzo": [
                            {
                                "cantDeclarada": 13.0,
                                "precioUnitarioDolares": 1300376.0,
                                "fobTotalDolares": 1300376.0,
                                "cif": 1329862.0599999998,
                                "codVenta": "CPT"
                            },
                            {
                                "cantDeclarada": 1.0,
                                "precioUnitarioDolares": 20906.4,
                                "fobTotalDolares": 20906.4,
                                "cif": 24410.49,
                                "codVenta": "MUL"
                            },
                            {
                                "cantDeclarada": 113.0,
                                "precioUnitarioDolares": 2270221.75,
                                "fobTotalDolares": 2757871.61,
                                "cif": 2960842.5500000003,
                                "codVenta": "FOB"
                            },
                            {
                                "cantDeclarada": 5.0,
                                "precioUnitarioDolares": 661953.6499999999,
                                "fobTotalDolares": 987953.6499999999,
                                "cif": 1025244.5800000001,
                                "codVenta": "FCA"
                            },
                            {
                                "cantDeclarada": 102.0,
                                "precioUnitarioDolares": 2307232.475,
                                "fobTotalDolares": 3408081.32,
                                "cif": 3535095.590000001,
                                "codVenta": "CIF"
                            },
                            {
                                "cantDeclarada": 2.0,
                                "precioUnitarioDolares": 238162.0,
                                "fobTotalDolares": 238162.0,
                                "cif": 243371.38,
                                "codVenta": "CIP"
                            },
                            {
                                "cantDeclarada": 11.0,
                                "precioUnitarioDolares": 270447.33,
                                "fobTotalDolares": 326149.08,
                                "cif": 342838.77,
                                "codVenta": "CFR"
                            },
                            {
                                "cantDeclarada": 5.0,
                                "precioUnitarioDolares": 724210.6699999999,
                                "fobTotalDolares": 724210.6699999999,
                                "cif": 750883.2999999999,
                                "codVenta": "EXW"
                            }
                        ]
                    }
                },
                {
                    "2021": {
                        "Abril": [
                            {
                                "cantDeclarada": 1.0,
                                "precioUnitarioDolares": 80642.7,
                                "fobTotalDolares": 80642.7,
                                "cif": 83455.93,
                                "codVenta": "CIP"
                            },
                            {
                                "cantDeclarada": 105.0,
                                "precioUnitarioDolares": 1692100.8520000002,
                                "fobTotalDolares": 3080449.54,
                                "cif": 3209423.6700000004,
                                "codVenta": "FOB"
                            },
                            {
                                "cantDeclarada": 21.0,
                                "precioUnitarioDolares": 1146575.9000000001,
                                "fobTotalDolares": 1399047.2300000002,
                                "cif": 1448657.1300000001,
                                "codVenta": "CFR"
                            },
                            {
                                "cantDeclarada": 1.0,
                                "precioUnitarioDolares": 110916.18,
                                "fobTotalDolares": 110916.18,
                                "cif": 113221.39,
                                "codVenta": "DAT"
                            },
                            {
                                "cantDeclarada": 9.0,
                                "precioUnitarioDolares": 531345.85,
                                "fobTotalDolares": 531345.85,
                                "cif": 565035.5,
                                "codVenta": "EXW"
                            },
                            {
                                "cantDeclarada": 5.0,
                                "precioUnitarioDolares": 495000.0,
                                "fobTotalDolares": 495000.0,
                                "cif": 506464.5,
                                "codVenta": "CPT"
                            },
                            {
                                "cantDeclarada": 35.0,
                                "precioUnitarioDolares": 1983681.1230000001,
                                "fobTotalDolares": 2584798.09,
                                "cif": 2738184.15,
                                "codVenta": "CIF"
                            }
                        ],
                        "Marzo": [
                            {
                                "cantDeclarada": 13.0,
                                "precioUnitarioDolares": 1300376.0,
                                "fobTotalDolares": 1300376.0,
                                "cif": 1329862.0599999998,
                                "codVenta": "CPT"
                            },
                            {
                                "cantDeclarada": 1.0,
                                "precioUnitarioDolares": 20906.4,
                                "fobTotalDolares": 20906.4,
                                "cif": 24410.49,
                                "codVenta": "MUL"
                            },
                            {
                                "cantDeclarada": 113.0,
                                "precioUnitarioDolares": 2270221.75,
                                "fobTotalDolares": 2757871.61,
                                "cif": 2960842.5500000003,
                                "codVenta": "FOB"
                            },
                            {
                                "cantDeclarada": 5.0,
                                "precioUnitarioDolares": 661953.6499999999,
                                "fobTotalDolares": 987953.6499999999,
                                "cif": 1025244.5800000001,
                                "codVenta": "FCA"
                            },
                            {
                                "cantDeclarada": 102.0,
                                "precioUnitarioDolares": 2307232.475,
                                "fobTotalDolares": 3408081.32,
                                "cif": 3535095.590000001,
                                "codVenta": "CIF"
                            },
                            {
                                "cantDeclarada": 2.0,
                                "precioUnitarioDolares": 238162.0,
                                "fobTotalDolares": 238162.0,
                                "cif": 243371.38,
                                "codVenta": "CIP"
                            },
                            {
                                "cantDeclarada": 11.0,
                                "precioUnitarioDolares": 270447.33,
                                "fobTotalDolares": 326149.08,
                                "cif": 342838.77,
                                "codVenta": "CFR"
                            },
                            {
                                "cantDeclarada": 5.0,
                                "precioUnitarioDolares": 724210.6699999999,
                                "fobTotalDolares": 724210.6699999999,
                                "cif": 750883.2999999999,
                                "codVenta": "EXW"
                            }
                        ]
                    }
                }
            ]
        }
    }
}

