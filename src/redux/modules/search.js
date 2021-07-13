import axios from 'axios';
import Search from '../../pages/Search';


//Query요청(방식2)[경로에 데이터가 노출되지 않고 params라는 항목에 데이터가 담겨간다. :)]
axios.get(`http://localhost:8080/api/Search`,
{
 	params: {
		uhospitalName : "멍멍병원", 
        hospitalImage : "https://hyunjung.s3.ap-northeast-2.amazonaws.com/hospital.jpeg", 
        hospitalContent : "여기 너무너무 좋아요",
        hospitalRate : "4.5점"
	}
})
//성공시 then 실행
.then(function (response) {
	console.log(response);
})
//실패 시 catch 실행
.catch(function (error) {
	console.log(error);
})
//성공이던 실패던 항상 실행
.then(function () {

});
