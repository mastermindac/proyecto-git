// Main File For Addvertisements

#include <stdio.h>

#define FIL 15
#define COL FIL

void virus_advertisement();

void virus_advertisement()
{
    for ( int i = 0 ; i < FIL ; i++ )
        for ( int j = 0 ; j < COL ; j++ )
            puts("La base de datos de virus ha sido actualizada");
}
