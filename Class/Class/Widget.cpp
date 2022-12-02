#include"Widget.h"

Widget::Widget(bool enabled) : enabled{ enabled } {}

void Widget::enable() {
	this->enabled = true;
}

void Widget::desable() {
	this->enabled = false;
}

bool Widget::isEnabled() const {
	return enabled;
}