// Function to map Arabic digits to Lao digits
// Lao digit conversion map
const originnumer: Record<string, string>  = {
    "0": "໐",
    "1": "໑",
    "2": "໒",
    "3": "໓",
    "4": "໔",
    "5": "໕",
    "6": "໖",
    "7": "໗",
    "8": "໘",
    "9": "໙"
};
export function mapFromOrigin(num:number) {
    return num.toString().split("").map(d => originnumer[d] || d).join("");
}

// 
export function KIPTEXT(number: number): string {
    const ones: string[] = ["ສູນ", "ໜຶ່ງ", "ສອງ", "ສາມ", "ສີ່", "ຫ້າ", "ຫົກ", "ເຈັດ", "ແປດ", "ເກົ້າ"];
    const tens: string[] = ["", "ສິບ", "ຊາວ", "ສາມສິບ", "ສີ່ສິບ", "ຫ້າສິບ", "ຫົກສິບ", "ເຈັດສິບ", "ແປດສິບ", "ເກົ້າສິບ"];

    interface Unit {
        name: string;
        value: number;
    }

    const units: Unit[] = [
        { name: "ພັນຕື້", value: 1_000_000_000_000 },
        { name: "ຫຼ້ອຍຕື້", value: 100_000_000_000 },
        { name: "ສິບຕື້", value: 10_000_000_000 },
        { name: "ຕື້", value: 1_000_000_000 },
        { name: "ຮ້ອຍລ້ານ", value: 100_000_000 },
        { name: "ສິບລ້ານ", value: 10_000_000 },
        { name: "ລ້ານ", value: 1_000_000 },
        { name: "ແສນ", value: 100_000 },
        { name: "ຫມື່ນ", value: 10_000 },
        { name: "ພັນ", value: 1_000 },
        { name: "ຮ້ອຍ", value: 100 },
    ];
    
    // Split integer and decimal parts
    let decPart: string | null = null;
    let [intStr, rawDecPart] = number.toString().split(".");
    let intPart = parseInt(intStr, 10);
    decPart = rawDecPart ? rawDecPart.padEnd(2, "0").slice(0, 2) : null;

    function twoDigit(n: number): string {
        if (n === 0) return ones[0];
        if (n < 10) return ones[n];
        if (n < 20) return tens[1] + (n === 10 ? "" : (n === 11 ? "ເອັດ" : ones[n % 10]));
        const ten = Math.floor(n / 10);
        const one = n % 10;
        if (one === 1) return tens[ten] + "ເອັດ";
        return tens[ten] + (one > 0 ? ones[one] : "");
    }

    function convertInteger(n: number): string {
        if (n <= 99) return twoDigit(n);

        let result = "";

        const bigUnits = units.slice(0, 4);   // ຕື້-related
        const smallUnits = units.slice(4);    // ລ້ານ and smaller

        // Step 1: handle big units
        for (const unit of bigUnits) {
            if (n >= unit.value) {
                const unitAmount = Math.floor(n / unit.value);
                n %= unit.value;
                result += (unitAmount === 1 ? "ໜຶ່ງ" : convertInteger(unitAmount)) + unit.name;
            }
        }

        // Step 2: handle "ລ້ານ" group
        if (n >= 1_000_000) {
            const millionBlock = Math.floor(n / 1_000_000);
            n %= 1_000_000;
            result += convertInteger(millionBlock) + "ລ້ານ";
        }

        // Step 3: handle rest
        for (const unit of smallUnits) {
            if (unit.value >= 1_000_000) continue;
            if (n >= unit.value) {
                const unitAmount = Math.floor(n / unit.value);
                n %= unit.value;
                result += (unitAmount === 1 ? "ໜຶ່ງ" : convertInteger(unitAmount)) + unit.name;
            }
        }

        if (n > 0) result += twoDigit(n);
        return result;
    }

    function convertDecimal(dec: string): string {
        const d1 = parseInt(dec[0], 10);
        const d2 = parseInt(dec[1], 10);
        return "ຈຸດ" + ones[d1] + ones[d2];
    }

    // Final result
    let output = "";
    if (!isNaN(intPart)) output += convertInteger(intPart);
    if (decPart) output += convertDecimal(decPart);
    return output;
}


export function KIPTEXTOKE(number: number): string {
    const ones: string[] = ["soun", "neung", "song", "sam", "si", "ha", "hok", "chet", "paet", "kao"];
    const tens: string[] = ["", "sip", "sao", "sam sip", "si sip", "ha sip", "hok sip", "chet sip", "paet sip", "kao sip"];

    const unitKaraoke: { name: string; value: number }[] = [
        { name: "phan teu", value: 1_000_000_000_000 },
        { name: "hoi teu", value: 100_000_000_000 },
        { name: "sip teu", value: 10_000_000_000 },
        { name: "teu", value: 1_000_000_000 },
        { name: "hoi lan", value: 100_000_000 },
        { name: "sip lan", value: 10_000_000 },
        { name: "lan", value: 1_000_000 },
        { name: "saen", value: 100_000 },
        { name: "muen", value: 10_000 },
        { name: "phan", value: 1_000 },
        { name: "hoi", value: 100 }
    ];

    // Split number to integer and decimal
    const [intStr, rawDecPart] = number.toString().split(".");
    const intPart: number = parseInt(intStr, 10);
    const decPart: string | null = rawDecPart ? rawDecPart.padEnd(2, "0").slice(0, 2) : null;

    function twoDigit(n: number): string {
        if (n === 0) return ones[0];
        if (n < 10) return ones[n];
        if (n < 20) return tens[1] + (n === 10 ? "" : (n === 11 ? " et" : " " + ones[n % 10]));
        const ten = Math.floor(n / 10);
        const one = n % 10;
        if (one === 1) return tens[ten] + " et";
        return tens[ten] + (one > 0 ? " " + ones[one] : "");
    }

    function convertInteger(n: number): string {
        if (n <= 99) return twoDigit(n);

        let result = "";

        const bigUnits = unitKaraoke.slice(0, 4);
        const smallUnits = unitKaraoke.slice(4);

        for (const unit of bigUnits) {
            if (n >= unit.value) {
                const unitAmount = Math.floor(n / unit.value);
                n %= unit.value;
                result += (unitAmount === 1 ? "neung" : convertInteger(unitAmount)) + " " + unit.name + " ";
            }
        }

        if (n >= 1_000_000) {
            const millionBlock = Math.floor(n / 1_000_000);
            n %= 1_000_000;
            result += convertInteger(millionBlock) + " lan ";
        }

        for (const unit of smallUnits) {
            if (unit.value >= 1_000_000) continue;
            if (n >= unit.value) {
                const unitAmount = Math.floor(n / unit.value);
                n %= unit.value;
                result += (unitAmount === 1 ? "neung" : convertInteger(unitAmount)) + " " + unit.name + " ";
            }
        }

        if (n > 0) result += twoDigit(n);
        return result.trim();
    }

    function convertDecimal(dec: string): string {
        const d1 = parseInt(dec[0], 10);
        const d2 = parseInt(dec[1], 10);
        return " chut " + ones[d1] + " " + ones[d2];
    }

    let output = "";
    if (!isNaN(intPart)) output += convertInteger(intPart);
    if (decPart) output += convertDecimal(decPart);
    return output.trim();
}
