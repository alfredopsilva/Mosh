#pragma once
#include<iostream>
using namespace std; 


class Date {
public: 
	Date(int, int, int); 
	int getYear() const; 
	int getMonth() const; 
	int getDay() const; 

private: 
	int year; 
	int month; 
	int day; 
};