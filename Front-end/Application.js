bt_to_board = document.querySelector("#to_board")
bt_to_question = document.querySelector("#to_question");
bt_to_main = document.querySelector("#backtomain");

question_display = document.getElementById("question");
main_display = document.getElementById("main");
board_display = document.getElementById("board");

bt_to_board.addEventListener("click",function(){
    main_display.style.display = "none";
    board_display.style.display = "block";
    bt_to_main.style.display = "block";
})

bt_to_main.addEventListener("click", function(){
    main_display.style.display = "block";
    board_display.style.display = "none";
    question_display.style.display = "none";
    bt_to_main.style.display = "none";
})