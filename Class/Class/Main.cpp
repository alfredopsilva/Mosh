#include"Textbox.h"

/*
Inheritance is a Mecanism that we use to re-use code and build (bring) the real world in virtual world.
For inheritance we have three types of keyword: 
	- public ( most common ) : The public methods from the parent class will be made as public at the child class. 
	- private : The public methods from the parent class will be made as private at the child class. 
	- protected : Is similar as private, they can't be accessed by outside but they are accessible within derived classes. But this is a "option" that is not common to use. 

*Constructors / Destructors and Inheritance*
	
The base class constructor is called before the derived class constructor. So in our study, the constructor of Widget will be called first. 
Because of That if our base constructor exclusively needs some data to be initialize we need to provide this data Through the child class. One way to solve this is adding a default constructor inside the base, but if it is not possible we can just call the base constructor with the using keyword.

For the destructors the ordem will be opposite. First the derived class and after the base class. 
*/

int main() {





}