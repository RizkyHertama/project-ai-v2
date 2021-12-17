function getBotResponse(input){

    if(input == "Halo" || input == "halo" ||  input == "HALO" ||  input == "Hello" ||  input == "HELLO" ||  input == "hello" ){
        return "Hai";
    }
    else if(input == "Hai" || input == "HAI" || input == "hai" || input == "HI" || input == "hi"){
        return "Halo";
    }
    else if(input == "Website apa ini?" || input == "website apa ini?" ){
        return "Website ini merupakan project artificial Intelligence Kelompok 4 yaitu Penerapan Multinomial Naive Bayes pada chatbot website.";
    }
    else if(input == "apa itu chatbot?" || input == "Apa itu chatbot?"){
        return "Chatterbot adalah sebuah program komputer yang dirancang untuk menyimulasikan percakapan intelektual dengan satu atau lebih manusia baik secara audio maupun teks";
    }
    else if(input == "Siapa pembuat website ini?" || input == "siapa pembuat website ini?" || input == "siapa yang membuat website ini?"){
        return "Website ini dibuat oleh Kelompok 4 Kelas LC01 yang beranggotakan : Ellin Anggriani, Farhan Muhammad Sabran, Muhammad Kadafi Azis, Rizky Hertama.";
    }
    else if(input == "Binus" || input == "BINUS" || input == "binus" || input == "bina nusantara" || input == "Bina Nusantara"){
        return "Universitas Bina Nusantara adalah salah satu universitas swasta Indonesia. Universitas ini bernaung di bawah lembaga pendidikan Bina Nusantara.";
    }
    else if(input == "Fungsi AI" || input == "fungsi ai" || input == "FUNGSI AI" || input == "fungsi AI" || input == "FUNGSI ARTIFICIAL INTELLIGENCE" || input == "fungsi Artificial intelligence" ){
        return "Fungsi AI yaitu menganalisis data, memahami pola, mengenali lingkungan sekitar hingga membuat keputusan";
    }
    else if(input == "AI adalah" || input == "AI ADALAH" || input == "ai adalah" || input == "Ai adalah" || input == "ARTIFICIAL INTELLIGENCE" || input == "Artificial intelligence" || input == "artificial intelligence" || input == "apa itu AI?"){
        return "Artificial Intelligence adalah sistem komputer (mesin) yang memiliki kecerdasan layaknya manusia. Dalam hal ini, AI mampu melakukan pembelajaran (perolehan informasi dan aturan untuk menggunakan informasi), penalaran (menggunakan aturan untuk mencapai kesimpulan), dan mengoreksi diri secara mandiri.";
    }
    else if(input == "kamu siapa?" || input == "Kamu siapa?" || input == "KAMU SIAPA?" || input == "kamu siapa" || input == "KAMU SIAPA"){
        return "Namaku chatbot, aku bertugas membantu kamu.";
    }
    else if(input == "kamu manusia?" || input == "Kamu manusia?" || input == "Apakah kamu manusia?" || input == "APAKAH KAMU MANUSIA?" || input == "apakah kamu manusia?"){
        return "Bukan!, aku robot.";
    }
    else if(input == "kelompok 4" || input == "KELOMPOK 4" || input == "Kelompok 4"){
        return "Anggota kelompok 4 : Ellin Anggriani, Farhan Muhammad Sabran, Muhammad Kadafi Azis, Rizky Hertama. ";
    }
    else{
        return "Maaf kami tidak memahami maksud anda.";
    }


}