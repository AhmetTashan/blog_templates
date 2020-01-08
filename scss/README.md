## Klasör Yapısı

**base klasörü**: Değişken, mixin, renk ve yazı tipi gibi genel tanımların ve sıfırlama dosyasını içeren klasördür.

**layout klasörü**: Ana yapıyı oluşturuan dosyaları içerir. Örneğin header, footer, sidebar vs.

**components klasörü**: Ana yapı dışında kalan küçük yapıları içeren klasördür. Kullanıcı arayüzü (UI) öğelerini içeren sass dosyaları vardır. Örneğin, modal, lightbox, breadcrumb vs.

**pages:** Sayfaların her biri için oluşturulan sayfaya özel kodların bulunduğu sass dosyaları içerir. Örneğin anasayfa (home.sass), hakkımızda, iletişim vs.

**vendors**: Kullandığımız eklentilerin sass dosyalarını koyduğumuz klasör. Burada şöyle bir durum var. Eğer eklentileri [bower](https://fatihhayrioglu.com/arayuz-gelistiriciler-icin-paket-yonetimi-bower/) ile ekliyorsak eklentileri **_bower_components** içindeki CSS dosyasını değiştirmeden kendi projemizde eklentinin CSS’lerini ezdiğimiz dosyayı barandırmak mantıklı olacaktır.

**styles.scss**: Yukarıdaki tüm dosyaları içeren ana dosyadır. Bu dosya derlenerek tek bir css dosyasını oluşturur.

**print.scss**:  Yazıcıdan çıktısı alınacak olan sayfaların tasarımları ayarlayan dosyadır.



**Kaynakça**: https://fatihhayrioglu.com/sass-klasor-yapisi/ 
