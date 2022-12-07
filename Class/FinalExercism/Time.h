#pragma once
#include<iostream>
using namespace std; 

class Time {
public: 
	Time(int, int, int); 
	int getHour() const; 
	int getMinute() const; 
	int getSecond() const; 
private: 
	int hour;
	int minute; 
	int second;
};