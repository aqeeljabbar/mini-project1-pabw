$(document).ready(function(){
    $.ajax({
        url: 'data.json',
        type: 'GET',
        dataType: 'json',
        success: function(data){
            // Menampilkan informasi toko
            $('#nama').text(data.Nama);
            $('#alamat').text(data.Alamat);

            // Menampilkan koleksi buku
            var buku = data.Koleksi_Buku;
            for(var i = 0; i < buku.length; i++){
                var judul = buku[i].Judul;
                var kategori = buku[i].Kategori;
                var penulis = buku[i].Penulis;
                var newRow = $('<tr>');
                newRow.append('<td>' + judul + '</td>');
                newRow.append('<td>' + kategori + '</td>');
                newRow.append('<td>' + penulis + '</td>');
                $('#daftar-buku').append(newRow);
            }
        },
        error: function(jqXHR, textStatus, errorThrown){
            console.log('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });
});