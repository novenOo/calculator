function calculator() {
		// num.each((i,ele) => console.log(ele))
		let Array1 = []
		let array2 = []
	    let num = 0;
	$('.num').click(function(){
			let inputVlaue = $('input').val()
		    let bef = $('input').val(inputVlaue + this.innerHTML)
            Array1.push(bef.val())
		    num = this.innerHTML;
	    })
	$('.orange').click(function(){
       if(String(this.innerHTML) === '÷'){
        $('input').val($('input').val() + this.innerHTML)
        let num1= Array1[Array1.length-1]
          // let after = $('input').val()
        console.log(num1)
       }
     })
}
calculator();