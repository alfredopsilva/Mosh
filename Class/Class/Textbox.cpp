#include"Textbox.h"



//TextBox::TextBox(bool enabled) : Widget(enabled){}


TextBox::TextBox()
{
}

TextBox::TextBox(bool enabled, const string& value) : Widget(enabled) {}

void TextBox::draw() const
{
	cout << "Drawing a textbox\n";
}

string TextBox::getValue(){
	
	return this->value;
}

void TextBox::setValue(const string& value) {

	this->value = value;
}






