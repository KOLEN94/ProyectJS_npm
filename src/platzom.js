export default function platzom(str){
	let translation = str
	//Si la palabra termina en "ar", se le quitan esos 2 caracteres
	if (str.toLowerCase().endsWith('ar')) {
		translation = str.slice(0, -2)//slice corta caracteres desde un caracter
									  //a otro caracter
	}
	//Si la palabra inicia con Z, se le añade "pe" al final
	if(str.toLowerCase().startsWith('z')){
		translation+= 'pe'
	}
	//Si la palabra traducida tiene 10 o mas caracteres
	// se debe partir a la mitad con un guion del medio
	const length = translation.length
	if(length>=10){
		const firstHalf = translation.slice(0, Math.round(length / 2))
		const secondHalf = translation.slice(Math.round(length / 2))
		translation = `${firstHalf}-${secondHalf}`
	}
	//Si la palabr original es un palíndromo,
	//ninguna regla anterio cuenta y se devuelve
	//la misma palabra intercalando mayúsculas y minúculas
	const reverse = (str) => str.split('').reverse().join('')
	function minMay(str){
		const  length = str.length
		let translation = ''
		let capitalize = true
		for(let i = 0;i < length; i++){
			const char = str.charAt(i)
			translation+= capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}
		return translation
	}
	if(str == reverse(str)){
		return minMay(str)
	}

	return translation
}