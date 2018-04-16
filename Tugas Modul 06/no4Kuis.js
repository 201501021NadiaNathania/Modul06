function Game()
{
	function Question(question, answers, correct)
	{
		this.question = question;
		this.answers = answers;
		this.correct = correct;
	}

	Question.prototype.displayQuestion = function()
	{
		console.log(this.question);

		for (var i = 0; i < this.answers.length; i++)
		{
			console.log(i + ' : ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(ans)
	{
		if (ans === this.correct)
		{
			Skor_Akhir += 1;
			console.log('Jawaban anda BENAR!!');
			console.log('');
		}
		else
		{
			console.log('Jawaban anda SALAH!! Coba lagi!');
			Salah_Jawab +=1;
			console.log('');
		}
	}

	var ql = new Question('Kapan kah Tanggal Kemerdekaan Indonesia ?',
	['20 Desember 2012', '17 Juni 1997', '17 Agustus 1945', '20 September 1970'],
	'2');
	var q2 = new Question('Siapa Nama Presiden Indonesia Saat Ini ?',
	['Jokowi', 'SBY', 'Megawati', 'Suharto'],
	'0');
	var q3 = new Question('Apakah Warna Bendera Indonesia?',
	['Merah Putih', 'Hijau Biru', 'Coklat Merah', 'MeJiKuHiBiNiU'],
	'0');
	var q4 = new Question('Apa Lambang Negara Indonesia ?',
	['Elang', 'Garuda','Kangguru'],
	'1');
	var q5 = new Question('Jumlah Pancasila Ada Berapa ?',
	['1', '2', '4' , '3' , '5'],
	'4');

	var questions = [ql, q2, q3, q4, q5];
	var Skor_Akhir = 0;
	var Salah_Jawab = 0;
	var Jumlah_Pertanyaan = 0;

	Berhenti:
	{
		for (;;)
		{
			var n = Math.floor(Math.random() * questions.length);

			questions[n].displayQuestion();

			var answer = prompt('Pilih jawaban yang benar!');

			if (answer == 'Exit')
			{
				console.log('');
				console.log('---Keluar Dari Permainan---');
				console.log('');
				console.log('Jumlah pertanyaan yang di jawab = ' + Jumlah_Pertanyaan);
				console.log('Jumlah jawaban yang salah = ' + Salah_Jawab);
				console.log('Skor akhir anda = ' + Skor_Akhir);
				break Berhenti;
			}

			Jumlah_Pertanyaan += 1 ;
			questions[n].checkAnswer(answer);
		}
	}
};
