#include"Textbox.h"



//TextBox::TextBox(bool enabled) : Widget(enabled){}

TextBox::TextBox(bool enabled, const string& value) : Widget(enabled) {}

string TextBox::getValue(){
	
	return this->value;
}

void TextBox::setValue(const string& value) {

	this->value = value;
}






