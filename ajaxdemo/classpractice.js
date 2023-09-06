class Item{
    constructor(itemId,itemName,price,quantity)
    {
        this.itemId=itemId
        this.itemName=itemName
        this.price=price
        this.quantity=quantity
    }

    printdetails()
    {
        console.log(`${this.itemId} ${this.itemName} ${this.price} ${this.quantity}`)

    }


  
}

let obj=new Item(1,"Coffee",150,20)
m=obj.printdetails()

async function myfun(price)
{
    let res= await obj.printdetails()
    console.log(res)

    if(price<100)
    {
        throw new Error("invalid price")
    }
    else{
        
        return "valid price"
    }
}

let ans=myfun(150)
console.log(ans)