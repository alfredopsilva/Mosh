#pragma once
#include"Widget.h"
using namespace std; 

class Checkbox : public Widget {
public:
	void draw() const override;
	Checkbox();
};