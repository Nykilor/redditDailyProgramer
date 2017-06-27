<?php
function getTimeInWords($d, $curse = false, $lang = "en-US") {
		$hour = array(
			0 => "twelve",
			1 => "one",
			2 => "two",
			3 => "three",
			4 => "four",
			5 => "five",
			6 => "six",
			7 => "seven",
			8 => "eight",
			9 => "nine",
			10 => "ten",
			11 => "eleven",
			12 => "twelve"
		);
		$m_ten = array(
			0 => " oh",
			2 => " twenty",
			3 => " thirty",
			4 => " forty",
			5 => " fifty"
		);
		$m_s = array(
			0 => " ",
			1 => " one",
			2 => " two",
			3 => " three",
			4 => " four",
			5 => " five",
			6 => " six",
			7 => " seven",
			8 => " eight",
			9 => " nine",
			10 => " ten",
			11 => " eleven",
			12 => " twelve",
			13 => " thirteen",
			14 => " fourteen",
			15 => " fifteen",
			16 => " sixteen",
			17 => " seventeen",
			18 => " eighteen",
			19 => " nineteen"
		 );
	if($curse) {
		$curse = ["mother fucking", "sons of bitch", "ass", "bastard", "goddamn", "twat", "fucking", "son of a whore", "damn", "bitch", "christs on a cracker", "arse"];
		$curse = " ".$curse[array_rand($curse)]." ";
	} else {
		$curse = "";
	}

	 $date = $d;
	 $date_s = explode("-", $date);

	 $h = $hour[$date_s[0]];

	 $full_h = false;
	 if($date_s[1] === "00") {
		 $full_h = true;
	 }

	 if($date_s[2] == "pm") {
		 $h_of = " past midday";
 	 } else {
		 $h_of = " before midday";
	 }
	 $m = str_split($date_s[1]);
	 if($m[0] >= 2) {
		 $m[0] = $m_ten[$m[0]];
		 $m[1] = $m_s[$m[1]];
	 } else if( $m[1] >= 10) {
		 $m[1] = $m_s[$date_s[1]];
		 $m[0] = $m_ten[0];
	 } else {
		 $m[1] = $m_s[$m[1]];
		 $m[0] = $m_ten[0];
	 }

	 if($full_h) {
		 $m[0] = " ";
	 }
	 $msg = "The server time is ".$h.$curse.$m[0].$m[1].$h_of;
	 echo '
	 <script>
	 if ("speechSynthesis" in window) {
	 	var msg = new SpeechSynthesisUtterance();
	 	msg.text = "'.$msg.'";
	 	msg.lang = "'.$lang.'";
	 	speechSynthesis.speak(msg);
	 }
	 </script>';
}
//window.speechSynthesis.getVoices(); in console
getTimeInWords(date("g-i-a"), true, "en-GB");
 ?>
