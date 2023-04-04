# Math-Number

### 01 Random Number
###### Program ini menggunakan fungsi rand untuk memeriksa apakah nilai min dan max adalah null, dan jika iya, maka akan dijadikan 0 untuk min dan 0 untuk max.
###### Kemudian, menggunakan method Math.random untuk menghasilkan bilangan float antara 0 dan 1, dan kemudian dikalikan dengan selisih max dan min ditambah 1, dan ditambah dengan nilai min.
###### Setelah itu, hasilnya dibulatkan ke bawah dengan method Math.floor sehingga menghasilkan bilangan integer acak dalam range yang ditentukan.

### 02 Choose Your Decimal
###### Yang pertama adalah membuat fungsi yang dapat membatasi jumlah angka di belakang koma (desimal) dari suatu bilangan desimal atau integer.
###### Fungsi chooseDecimals menggunakan method toFixed pada bilangan desimal atau integer untuk membatasi jumlah angka di belakang koma (desimal) sebanyak nilai d yang diberikan, dan kemudian mengembalikan nilai tersebut dalam bentuk Number.
###### ika input yang diberikan bukan merupakan tipe data number, maka fungsi akan mengembalikan 'Invalid input'. Selain itu, jika bilangan yang diberikan adalah integer.

### 03 Is It Numeric
###### Langkah awal yaitu dengan membuat fungsi yang dapat memeriksa apakah suatu nilai adalah numerik atau bukan.
###### Fungsi isItNumeric memanfaatkan function isNaN dan isFinite untuk memeriksa apakah suatu nilai bukan numerik atau memiliki nilai yang tidak terbatas (infinity).
###### Jika nilai tersebut bukan numerik atau memiliki nilai infinity, maka akan menghasilkan nilai false, dan jika tidak, maka akan menghasilkan nilai true.

### 04 Make Integer Round Up
###### Pertama kita akan membuat fungsi yang dapat membulatkan suatu nilai integer ke atas dalam kelipatan 5.
###### Fungsi ini memanfaatkan method Math.ceil() untuk membulatkan suatu nilai ke atas, dan dibagi dengan 5 untuk mendapatkan nilai kelipatan 5 yang lebih besar dari nilai tersebut.
###### Setelah itu, nilai tersebut dikalikan kembali dengan 5 untuk mendapatkan nilai bulat ke atas dalam kelipatan 5.
