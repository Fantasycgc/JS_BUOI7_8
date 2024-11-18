let numArray = []
let numArray2 = []

function getElement(element) {
    return document.getElementById(element)
}

function themSo() {
    const _userInput = Number(getElement("inputNum").value);
    numArray.push(_userInput), getElement("txtArray").innerHTML = numArray
}
// Tổng Số Dương
function sumQ1() {
    let total = 0
    for (let index = 0; index < numArray.length; index++) {
        const element = numArray[index];
        if (element > 0)
            total += element

    }
    getElement('txtSum').innerHTML = 'Tổng số dương: ' + total
}
// Đếm số dương
function demSoDuong() {
    let count = 0
    for (let index = 0; index < numArray.length; index++) {
        const num_Count = numArray[index];
        if (num_Count > 0)
            count = count + 1

    }
    getElement('txtCount').innerHTML = 'Số dương: ' + count
}
// tìm số nhỏ nhất
function soNhoNhat() {
    let numArray_new = numArray.map(length => length)
    let result
    if (numArray_new.length > 0) {
        numArray_new.sort((a, b) => a - b)
        result = 'Số nhỏ nhất: ' + numArray_new[0]
    } else {
        result = 'Bạn chưa nhập số'
    }

    getElement('txtMin').innerHTML = result
}
// tìm số dương nhỏ nhất
function soDuongNhoNhat() {
    let numArray_new = numArray.filter(num => num >= 0)
    console.log("numArray_new: ", numArray_new);
    let result
    if (numArray_new.length > 0) {
        numArray_new.sort((a, b) => a - b)
        result = 'Số dương nhỏ nhất: ' + numArray_new[0]

    }
    else {
        result = 'Không có số dương trong mảng'
    }

    getElement('txtMinPos').innerHTML = result

}
// tìm số chẵn cuối cùng
function soChan() {
    let result = ''
    let numArray_new = numArray.filter(num => num % 2 === 0)
    if (numArray_new.length > 0) {
        result = 'Số chẵn cuối cùng: ' + numArray_new[numArray_new.length - 1]
    } else {
        result = 'Số chẵn cuối cùng: -1 '
    }
    getElement('txtEven').innerHTML = result
}

// hoán đổi vị trí
function xuLySwap(arr, position1, position2) {
    return [arr[position1], arr[position2]] = [arr[position2], arr[position1]]
}
function hoanDoi() {
    let numArray_new = numArray.map(length => length)
    let result
    if (numArray_new.length > 0) {
        const position1 = document.getElementById('inputIndex1').value * 1
        const position2 = document.getElementById('inputIndex2').value * 1
        xuLySwap(numArray_new, position1, position2)
        result = 'Mảng sau khi đổi: ' + numArray_new
    } else {
        result = 'Không có dữ liệu đầu vào'
    }

    getElement('txtChangePos').innerHTML = result
}

// sắp xếp tăng dần
function tangDan() {
    let result
    if (numArray.length > 0) {
        result = numArray.sort((a, b) => a - b)
        getElement('txtIncrease').innerHTML = 'Chuỗi sau khi sắp xếp: ' + result
    } else {
        result = 'Không có dữ liệu đầu vào'
    }
    getElement('txtIncrease').innerHTML = result

}
function checkSoNguyenTo(element) {
    if (element < 2) {
        return 0;
    }
    for (let i = 2; i <= Math.sqrt(element); i++) {
        if (element % i === 0) {
            return 0;
        }
    }
    return 1;
}
// Tìm số nguyên tố đầu tiên
function soNguyenTo() {

    let result
    if (numArray.length > 0) {
        for (let index = 0; index < numArray.length; index++) {
            const element = numArray[index];

            if (checkSoNguyenTo(element)) {
                result = numArray[index];
                break
            }
            else {
                result = '-1'
            }
        }

    } else {
        result = 'Không có dữ liệu đầu vào'
    }
    getElement('txtPrime').innerHTML = result

}

// Đếm số nguyên
function themSo9() {
    const _userInput = Number(getElement("inputFloat").value);
    numArray2.push(_userInput), getElement("txtArrayFloat").innerHTML = numArray2
}
function demSoNguyen() {
    let count = 0
    for (let index = 0; index < numArray2.length; index++) {
        const element = numArray2[index];
        if (Number.isInteger(element)) {
            count = count + 1
        }
    }
    getElement('txtInt').innerHTML = 'Số Nguyên: ' + count
}

// Đếm số lượng âm dương
function demSoSanh() {
    let count_AM = 0
    let count_Duong = 0
    let result
    for (let index = 0; index < numArray.length; index++) {
        const element = numArray[index];
        if (element > 0) {
            count_Duong++
        }
        if (element < 0) {
            count_AM++
        }
    }
    if (count_AM > count_Duong) {
        result = 'Số Âm > Số Dương'
    }
    if (count_Duong > count_AM) {
        result = 'Số Dương > Số Âm'
    }
    if (count_AM === count_Duong) {
        result = 'Số Âm = Số Dương'
    }
    getElement('txtCompare').innerHTML = result
}
document.addEventListener("contextmenu", function (n) {
    n.preventDefault()
}, !1), document.onkeydown = function (e) {
    e = e || window.event;

    if (
        e.keyCode === 123 ||
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
        (e.ctrlKey && e.keyCode === 85)

    ) {
        e.preventDefault();
        return false;
    }
}