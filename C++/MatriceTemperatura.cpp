#include <iostream>
using namespace std;
/* Realizzare un programma che:
1. memorizzi in un vettore 5 città ed in una matrice 5x5 le temperature (float) rilevate in 5 momenti diversi della giornata.
2. chiesto all'utente una città visualizzi la temperatura media
3. visualizzi le città con la temperatura massima rilevata in ognuna di esse
4. visualizzi in ordine decrescente di temperatura massima i nomi delle città 
(conviene utilizzare un nuovo vettore parallelo contenente le temperature massime calcolate)*/
void carica(float mat[][5],int num,int num1,string citta[]);
int ricerca(string citta[], int num);
float media(float mat[][5],int num,int richiesta);

int main() {
	float temperatura[5][5];
	int grandezza = 5,grandezza1 = 5,richiesta;
	string citta[5];
	carica(temperatura,grandezza,grandezza1,citta);
	richiesta = ricerca(citta,grandezza);
	cout << "" << media(temperatura,grandezza,richiesta);
}

float media(float mat[][5],int num,int richiesta) {
	float somma = 0;
	for (int i = 0; i < num; i++) {
		somma += mat[richiesta][num];
	}
	return somma / num;
}

void carica(float mat[][5],int num,int num1,string citta[]) {
	string risposta;
	for (int i = 0; i < num1; i++) {
		cout << "Dammi il nome citta\n";
		cin >> risposta;
		citta[i] = risposta;	
		for (int j = 0; j < num; j++) {
			do {
				cin >> mat[i][j]; 	
			} while(mat[i][j] < -70 || mat[i][j] > 50);
		}
	}
}

int ricerca(string citta[], int num) {
	string richiesta;
	cout << "Quale citta'?\n";
	cin >> richiesta;
	for (int i = 0; i < num; i++) {
		if (richiesta == citta[i]) {
			return i;			
		}
	}
}
