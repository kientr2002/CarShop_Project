import React, { useState, useEffect }  from "react";
import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../../../component/Admin/components/Header";
import axios from 'axios';
const Form = () => {
  const [account, setAccount] = useState([]);
  const [Warning, setWarning] = useState([]);
  useEffect(() => {
      axios.get('http://localhost/Model/Account-data.php')
        .then(response => setAccount(response.data))
        .catch(error => console.log(error));
    }, []);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = () => {
    const name = document.getElementsByName("user_name")[0].value;
    const email = document.getElementsByName("user_email")[0].value;
    const password = document.getElementsByName("user_password")[0].value;
    const confirmPassword = document.getElementsByName("user_repassword")[0].value;
    const birth = document.getElementsByName("user_birthday")[0].value;
    const address = document.getElementsByName("user_address")[0].value;
    const phone = document.getElementsByName("user_phonenumber")[0].value;
    const question = document.getElementsByName("user_question")[0].value;
    const answer = document.getElementsByName("user_answer")[0].value;
    verifyAccount(name, email, password, confirmPassword, birth, address, phone,question, answer);
  };
  const verifyAccount = (name,email, password, confirmPassword, birth, address, phone,question,answer) => {
    var yearAge = parseInt(
      birth.substring(0, 4),
      10)
    let regexName = new RegExp(/^[a-z|A-Z|ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]{1,128}$/);
    let regexEmail = new RegExp(/\b\w+@gmail\.com\b/);
    let regexPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/);
    let regexNumPhone = new RegExp(/^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/);
    let regexAnswer = new RegExp(/^.{0,100}$/)
    if(name===""||email=== "" || password === ""||confirmPassword===""||birth===""||address===""||phone===""||question==="0"||answer===""){
      setWarning("Hãy nhập đầy đủ thông tin!");
      
    } else if(!regexName.test(name)){
      setWarning("Tên của bạn không được chứa số, ký tự đặc biệt!");
      
    } else if(!regexEmail.test(email)){
      setWarning("Email của bạn cần phải có định dạng <tên>@gmail.com!");
      
    } else if(!regexPassword.test(password)){
      setWarning("Mật khẩu phải có ít nhất 8 ký tự đến 32 ký tự, bao gồm ký tự viết hoa, viết thường, số và ký tự đặc biệt!");
      
    }else if(!(password === confirmPassword)){
      setWarning("Mật khẩu xác nhận phải khớp với mật khẩu!");
      
    }else if((2023-yearAge+1)<15){
      setWarning("Tuổi của bạn cần phải lớn hơn 15");
      
        
    } else if(!regexNumPhone.test(phone)){
      setWarning("Số điện thoại gồm 10 số nếu có nhập số 0 ở đầu tiên còn nếu không nhập 0 thì còn 9 số!");
    }else if(!regexAnswer.test(answer)){
      setWarning("Câu trả lời bảo mật không được quá 100 ký tự!");
    } else {
      setWarning("");
      verifyEmail(name, email, password, confirmPassword, birth, address, phone, question, answer);
    }
   
  };
  const verifyEmail = (name, email, password, confirmPassword, birth, address, phone, question, answer) => {
    let id = 0;
    for (let i = 0; i < account.length; i++) {
      if(account[i].id > id){
        id = account[i].id;
      }
      if (email === account[i].email) {
        // Trùng khớp, chuyển hướng đến trang khác
        setWarning("Email của bạn đã được sử dụng!");
        
        return;
      }
    }
    id += 1;
    uploadDatabase(id,name, email, password, birth, address, phone, question, answer);
    setWarning("");
  };
  const uploadDatabase = (id ,name, email, password, birth, address, phone, question, answer) => {
      if(question == '1'){
        question="Sở thích của bạn là gì";
      } else if(question == '2'){
        question="Bạn sống ở đâu";
      } else if(question == '3'){
        question = "Biệt danh của bạn là gì";
      } else if (question == '4'){
        question = "Bạn đang làm nghề gì"
      } else {
        //
      }
    const data = { // Tạo một object chứa thông tin của tài khoản
      user_id: id,
      user_name: name,
      user_email: email,
      user_password: password,
      user_birthday: birth,
      user_address: address,
      user_phonenumber: phone,
      user_question: question,
      user_answer: answer,
    };
    axios.post('http://localhost/Model/registerAdmin-data.php', data)
    .then(response => {
      // Xử lý kết quả trả về nếu cần
      alert("Khởi tạo thành công!");
      navigation();
    })
    .catch(error => {
      // Xử lý lỗi nếu có
      alert(error);
    });
  }
  const navigation = () => {   
    window.location.href = "/contacts";
  }
  return (
    <Box m="20px">
      <Header title="Tạo tài khoản Admin"  />
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Full Name"
                name="user_name"
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                name="user_email"
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Password"
                name="user_password"
                sx={{ gridColumn: "span 4" }}
              />
                <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Confirm Password"
                name="user_repassword"
                sx={{ gridColumn: "span 4" }}
              />

              <input
              type="date"
              class="form-control border-0 shadow-none bg-white form-control-sm"
              id="birthday"
              placeholder="Enter your birthday"
              name="user_birthday"
              ></input>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Address"
                name="user_address"
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Phone"
                name="user_phonenumber"
                sx={{ gridColumn: "span 4" }}
              />
              <select
                class="custom-select border-0"
                id="question"
                name="user_question"
              >
                <option value="0" selected>Select Question</option>
                <option value="1">Sở thích của bạn là gì</option>
                <option value="2">Bạn sống ở đâu</option>
                <option value="3">Biệt danh của bạn là gì</option>
                <option value="4">Bạn đang làm nghề gì</option>
              </select>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Answer"
                name="user_answer"
                sx={{ gridColumn: "span 4" }}
              />
              <div role="alert" style={{color: 'red'}}>
                {Warning}
              </div>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained" onClick={handleFormSubmit}>
                Create New User
              </Button>
            </Box>
    </Box>
  );
};


export default Form;
