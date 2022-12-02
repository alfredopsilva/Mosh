#pragma once
#include<iostream>
#include"Widget.h"
using namespace std; 

// TextBox

class TextBox : public Widget { // This public keyword mean that the public methods from Widget will be inheritaded as public.
public:
	using Widget::Widget; // Here is the calling of the base constructor.
	//TextBox(bool enabled); // Default Constructor 
	explicit TextBox(bool enabled,const string& value); // Paramenter Constructor with explicit keyword to avoid impliciting casting.
	string getValue();
	void setValue(const string& value);
private:
	string value;

};