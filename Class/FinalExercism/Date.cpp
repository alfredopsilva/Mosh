#include"Date.h"

Date::Date(int year, int month, int day) : year{year}, month{month}, day{day} {}

int Date::getYear() const
{
	return year;
}

int Date::getMonth() const
{
	return month;
}

int Date::getDay() const
{
	return day;
}
