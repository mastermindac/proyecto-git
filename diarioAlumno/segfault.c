#include <stdio.h>

// Basic code for a Segmentation Fault in C by Domenico Goya

int main(void) {
  char* str;

  str = "myString";
  *(str + 1) = 'x';

  return 0;
}