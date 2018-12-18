package main

import "fmt"

func isPalindrome(mot string) bool {
	size := len(mot)

	if size == 0 || size ==1{

		return true
	}
	
	if mot[0] != mot[size-1]{

		return false
	}

	return isPalindrome(mot[1:size-1])
}

// Run go run palindrome.go & Generate in Exe go build -o palindrome.exe
func main(){

	var m string

	fmt.Print("Entrer mot : ")
	fmt.Scanf("%s", &m)  //& affiche la valeur mémoire
	fmt.Printf("%s", m)

	//println(isPalindrome("radar"))

	if isPalindrome(m){

		fmt.Print(" est ")
	}else{
		fmt.Print(" n'est pas")
	}

	fmt.Print("un palindrome.")
}