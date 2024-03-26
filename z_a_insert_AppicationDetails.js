const connectDb = require("./dbConnection");
const ApplicationDetail = require("./models/a_ApplicationDetailsModel");

async function insertApplicationDetail() {

    connectDb();
    try {

        const newDetail = new ApplicationDetail({
            "id": 30,
            "code": "ThinkBook13.3",
            "brand": "Lenovo",
            "model": "ThinkBook13.3",
            "price": "4600.00",
            "count": 80,
            "parm": {
                "CPU": "I3-12600",
                "RAM": "16G",
                "DISK": "ST_SSD_128gb",
                "SCREEN": "13.3"
            },
            "applicationForm_Id": "65ca7197e5ede3d67a4a0c41"
        })
        await newDetail.save();
        console.log("access insert")

        // test using attr
        /*
        const newDetail2 = new ApplicationDetail();
        newDetail2.id=22;
        newDetail2.code="idel12";
        newDetail2.code="brand";
        newDetail2.parm={
            "CPU": "I3-11600",
            "RAM": "8G",
            "DISK": "ST_HDD_128gb",
            "SCREEN": "12.1"
        };
        newDetail2.applicationForm_Id="65ca7197e5ede3d67a4a0c41"
        await newDetail2.save();
        console.log("access insert2")
    */



    }
    catch (err) {

        console.log(err);
        process.exit(0);


    }


}


insertApplicationDetail();





