const mainElement = document.querySelector('body')







let coin = {
    state: 0,


    flip: function () {
        this.state = Math.round(Math.random() * 1);


        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function () {
        coin.flip()
        if (this.state === 0) {
            console.log("Heads")
            document.body.append("go home")
            const heads = document.createElement("div")
            let front = document.createElement("img")
            front.src = "./assets/sonic.jpg";
            front.height = 220;
            front.width = 220;
            heads.append(front)
            mainElement.append(heads)




        } else {
            document.body.append("tails")
            const tails = document.createElement("div")
            let back = document.createElement("img")
            back.src = "./assets/tails.png";
            back.height = 220;
            back.width = 220;
            tails.append(back)
            mainElement.append(tails)

        }
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function () {
        coin.flip()


        let image = document.createElement('img');

        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return image;
    }
};


function checkwork() {
    coin.toString()
    coin.toHTML()
}
checkwork()