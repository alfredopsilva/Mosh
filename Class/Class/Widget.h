#pragma once
#include<iostream>
using namespace std;

class Widget {
public:
	
	Widget();
	Widget(bool enabled);
	void enable();
	void desable();
	bool isEnabled() const;
	virtual void draw() const = 0; // This is a Pure Virtual Method

private:
	bool enabled;

protected:
	int width; 

};




