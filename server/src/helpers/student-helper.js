module.exports = {
    ddu_id_formate_check: (ddu_id) => {

        //20BBXXX000
        if (ddu_id.length !== 10) return false;

        let Branch = [
            "IT", "CE",
            "MH", "CH", "CL",
            "EC", "IC"
        ];

        //1960-1999 and 2000 to current year
        let year = parseInt(ddu_id.slice(0, 2));
        year = (year >= 60 && year <= 99) ?
            parseInt("19" + year) :
            parseInt("20" + year);

        let branch = ddu_id.slice(2, 4);
        let alpha = ddu_id.slice(4, 7);
        let num = parseInt(ddu_id.slice(7, 10));

        return (year >= 1960 && year <= new Date().getFullYear()) &&
            (Branch.indexOf(branch) !== -1) &&
            (alpha === "UOS" || alpha === "ONS") &&
            Number.isInteger(num);
    },

    rmvClub: (list, id) => {

        for (i = 0; i < list.length; i++) {
            if (list[i].club_id.toString() === id) {
                console.log(list[i].club_id.toString() === id);
                list.splice(i, 1);
                break;
            }
        }
        return list;
    }
}