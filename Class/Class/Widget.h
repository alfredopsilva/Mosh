#pragma once
#include<iostream>
using namespace std;

class Widget {
public:
	
	Widget(bool enabled);
	void enable();
	void desable();
	bool isEnabled() const;

private:
	bool enabled;

protected:
	int width; 

};




