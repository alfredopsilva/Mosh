#include"Textbox.h"
#include"Widget.h"
#include"Checkbox.h"
#include"FileReader.h"
#include<vector>
#include<memory>

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

-- Conversion Between Base and Derived Classes -- 
Upcasting is when we convert a Derived class into a Base cass, the opposite procedure, its call down casting and it is illegal. 

-- Overring Methods -- 
This happens when we have a method with the same name at the base and derived classes. The compiler, by default will use the base method. To change this, we need to use virtual keyword. Here the compiler will use another way called later or dynamic.

-- Polymorphism -- 
It means many forms. 
An Object taking many forms.

Polymorphic Collections
vector<unique_ptr<Widget>> widgets;
	widgets.push_back(make_unique<TextBox>());
	widgets.push_back(make_unique<Checkbox>());
	for (const auto& widget : widgets) {
		widget->draw();
	}


-- Virtual Destructors -- 

Always when you declared a method as virtual, WE NEED TO ADD an virtual destructors. 

-- Abstract Classes -- 
When we crate an abstract class, we need to override at the derivedes class , if no, they will become abstract as well. 
A Class that have at least one pure virtual method is called Abstract.
Abstract Classes cannot be instantiate but we can use them as pointers or reference. 
Final Keyword is used to set a type of limit for all override. 

-- Deep Inheritance -- 

Don't create deep inheritance hierarchies. 
Limit an Inheritance to 3 levels. 

-- Multiple Inheritance -- 
It is when an derived class can have more than one base class. 


*/



int main() {




}