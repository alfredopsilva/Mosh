#pragma once
#include"Date.h"
#include"Time.h"
#include<iostream>
using namespace std; 

class DateTime : public Date, public Time {
public: 
	DateTime(int, int, int, int, int, int);

	void displayDate() {
		cout << "The current date is \n" <<
			this->getDay() << this->getMonth() << this->getYear(); 
	}

};