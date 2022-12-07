#include "Time.h"

Time::Time(int hour, int minute, int second) : hour{ hour }, minute{ minute }, second{second} {}

int Time::getHour() const
{
	return hour;
}

int Time::getMinute() const
{
	return minute;
}

int Time::getSecond() const
{
	return second;
}
