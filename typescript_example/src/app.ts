let value : any = 5;
value = 'hello';
value = 'true';

/*************** */

let price: number | string = 5;
price = 'free';
// price = true;

/*************** */
type StrOrNum = number | string;

let total: number;
let orderId : StrOrNum;

const calculate = (price:StrOrNum, qty: number):void =>{

};

const findOrderId = (customer:{costomerId: StrOrNum, name:string}, prodId:StrOrNum): StrOrNum =>{
    return orderId;
};

/*************** */
let itemPrice: number;

const setItemPrice = (price:StrOrNum):void =>{
    if(typeof price === 'string'){
        itemPrice = 0;
    } else{
        itemPrice = price;
    }
};

setItemPrice(50);

/*************** */
function sendGreeting(msg = 'Hello', name = 'there'):void{
    console.log(`${msg}, ${name}`);
};

sendGreeting();
sendGreeting('Good');
sendGreeting('Good', 'Mark');