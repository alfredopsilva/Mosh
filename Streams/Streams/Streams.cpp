#include<iostream>
#include<fstream>
#include<string>
#include<sstream>
#include<iomanip>
using namespace std; 



/*
Streams can be considered like a Data Source or destination. 

Types Of Streams
	- istream
	- ostream
	- ifstream
	- ofstream
	- istringstream
	- ostringstream

ios, is the base class for all kinds of streams.


Function for error handling
Buffer its a temporary storage to read values.

double numberVerification(const string& prompt) {

	double value;

	while (true) {
		cout << prompt << ":" << endl;
		cin >> value;
		if (cin.fail()) {
			cout << "Enter a valid " << prompt << endl;
			cin.clear();
			cin.ignore(numeric_limits<streamsize>::max(), '\n'); // Here we can use numeric_limits to check the large value that can be stored in stream size.
		}
		else {
			break;
		}
	}

	return value;

}

FILE STREAM CLASSES 
3 types : 
	- ifstream
	- ofstream 
	- fstream

*/


struct Movie {
	int id; 
	string title; 
	int year; 
};


int main() {
	
	/* Converting Values to String
	double number{ 12.34 };
	stringstream stream; 
	stream << fixed << setprecision(1) << number; 
	string str2 = stream.str();

	string str = to_string(number);
	cout << fixed << setprecision(2) <<str << endl;

	cout << str2 << endl;
	*/

	/* Parsing String*/
	string str = "10 20"; 
	stringstream stream; 
	stream.str(str);
	int first; 
	stream >> first; 
	int second; 
	stream >> second; 

	cout << first << " and " << second << " and the sum is " << first + second; 
		
	string movie{ "Terminator 1, 1984" }; 
	stream.str(movie); 
	string str_movie;
	getline(str_movie,movie, ',');
		
	/* 
	Writing to Text Files
	ofstream file; 
	file.open("data.csv"); 
	if (file.is_open()) {
		file << "Id,title,year\n";
		file << "1,Terminator1, 1984\n";
		file << "2,Terminator2, 1988\n";
		file << "3,Terminator3, 1994\n";
		file.close();
	}*/


	/*Reading Files

	ifstream file; 
	file.open("data.csv"); 
	if (file.is_open()) {
		string str; 
		getline(file, str);
		while (!file.eof()) {
			getline(file, str, ',');
			if (str.empty()) continue;
			Movie movie; 
			movie.id = stoi(str); 

			getline(file, str, ',');
			movie.title = str;

			getline(file, str, ',');
			movie.year = stoi(str);
			
			cout << movie.title << endl;
		}

		file.close();
	}
	*/

	//int numbers[]{ 100000, 200000, 300000 }; 
	//ofstream file("numbers.dat", ios::binary); 
	//if (file.is_open()) {
	//	file.write(reinterpret_cast<char*>(&numbers),sizeof(numbers));
	//	file.close();
	//
	//
	//};


	
	
}