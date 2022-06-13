jQuery('.mm-prev-btn').hide();

	var x;
	var count;
	var current;
	var percent;
	var z = [];

	init();
	getCurrentSlide();
	goToNext();
	goToPrev();
	getCount();
	buildStatus();
	deliverStatus();
	submitData();
	confirmtomain();
	KeyBoard();
	function init() {
		
		jQuery('.mm-survey-container .mm-survey-page').each(function() {

			var item;
			var page;

			item = jQuery(this);
			page = item.data('page');

			item.addClass('mm-page-'+page);
		});

	}
	function getCount() {

		count = jQuery('.mm-survey-page').length;
		return count;

	}
	function KeyBoard() { 
		current = 1
		jQuery('body').on('keyup', function(key){
		
		console.log(current)
		if(key.keyCode==13) {
			if(jQuery('.mm-next-btn button').attr('disabled')!='disabled') {
				current += 1
				if(current>20){
					jQuery('.mm-finish-btn button').trigger('click');
				}
				else{
					jQuery('.mm-next-btn').trigger('click');
				}
			}
		}
		if(key.keyCode==49){
			bt_pushed = 1
			jQuery('.mm-survey-page[data-page='+current+'] .mm-survey-item input[itemid=1]').trigger('click');
		}
		if(key.keyCode==50){
			bt_pushed = 2
			jQuery('.mm-survey-page[data-page='+current+'] .mm-survey-item input[itemid=2]').trigger('click');
		}
		if(key.keyCode==51){
			bt_pushed = 3
			jQuery('.mm-survey-page[data-page='+current+'] .mm-survey-item input[itemid=3]').trigger('click');
		}
		if(key.keyCode==52){
			bt_pushed = 4
			jQuery('.mm-survey-page[data-page='+current+'] .mm-survey-item input[itemid=4]').trigger('click');
		}
	});
	
}
	function goToNext() {

		jQuery('.mm-next-btn').on('click', function() {
			goToSlide(x);
			getCount();
			current = x + 1;
			var g = current/count;
			buildProgress(g);
			var y = (count + 1);
			getButtons();
			jQuery('.mm-survey-page').removeClass('active');
			jQuery('.mm-page-'+current).addClass('active');
			getCurrentSlide();
			checkStatus();
			if( jQuery('.mm-page-'+count).hasClass('active') ){
				if( jQuery('.mm-page-'+count).hasClass('pass') ) {
					jQuery('.mm-finish-btn').addClass('active');
				}
				else {
					jQuery('.mm-page-'+count+' .mm-survery-content .mm-survey-item').on('click', function() {
						jQuery('.mm-finish-btn').addClass('active');
					});
				}
			}
			else {
				jQuery('.mm-finish-btn').removeClass('active');
				if( jQuery('.mm-page-'+current).hasClass('pass') ) {
					jQuery('.mm-survey-container').addClass('good');
					jQuery('.mm-survey').addClass('okay');
				}
				else {
					jQuery('.mm-survey-container').removeClass('good');
					jQuery('.mm-survey').removeClass('okay');
				}
			}
			buttonConfig();
		});

	}

	function goToPrev() {

		jQuery('.mm-prev-btn').on('click', function() {
			goToSlide(x);
			getCount();			
			current = (x - 1);
			var g = current/count;
			buildProgress(g);
			var y = count;
			getButtons();
			jQuery('.mm-survey-page').removeClass('active');
			jQuery('.mm-page-'+current).addClass('active');
			getCurrentSlide();
			checkStatus();
			jQuery('.mm-finish-btn').removeClass('active');
			if( jQuery('.mm-page-'+current).hasClass('pass') ) {
				jQuery('.mm-survey-container').addClass('good');
				jQuery('.mm-survey').addClass('okay');
			}
			else {
				jQuery('.mm-survey-container').removeClass('good');
				jQuery('.mm-survey').removeClass('okay');
			}
			buttonConfig();
		});

	}

	function buildProgress(g) {
		if(g > 1){
			g = g - 1;
		}
		else if (g === 0) {
			g = 1;
		}
		g = g * 100;
		jQuery('.mm-survey-progress-bar').css({ 'width' : g+'%' });
		jQuery('#progress-bar').css({'left':g*10.85})
	}

	function goToSlide(x) {

		return x;

	}

	function getCurrentSlide() {

		jQuery('.mm-survey-page').each(function() {

			var item;

			item = jQuery(this);

			if( jQuery(item).hasClass('active') ) {
				x = item.data('page');
			}
			else {
				
			}

			return x;

		});

	}

	function getButtons() {

		if(current === 0) {
			current = y;
		}
		if(current === count) {
			jQuery('.mm-next-btn').hide();
		}
		else if(current === 1) {
			jQuery('.mm-prev-btn').hide();
		}
		else {
			jQuery('.mm-next-btn').show();
			jQuery('.mm-prev-btn').show();
		}

	}

	jQuery('.mm-survey-q li input').each(function() {

		var item;
		item = jQuery(this);

		jQuery(item).on('click', function() {
			if( jQuery('input:checked').length > 0 ) {
		    	jQuery('label').parent().removeClass('active');
		    	item.closest( 'li' ).addClass('active');
			}
			else {
				//
			}
		});

	});

	percent = (x/count) * 100;
	jQuery('.mm-survey-progress-bar').css({ 'width' : percent+'%' });

	function checkStatus() {
		jQuery('.mm-survery-content .mm-survey-item').on('click', function() {
			var item;
			item = jQuery(this);
			item.closest('.mm-survey-page').addClass('pass');
		});
	}

	function buildStatus() {
		jQuery('.mm-survery-content .mm-survey-item').on('click', function() {
			var item;
			item = jQuery(this);
			item.addClass('bingo');
			item.closest('.mm-survey-page').addClass('pass');
			jQuery('.mm-survey-container').addClass('good');
		});
	}

	function deliverStatus() {
		jQuery('.mm-survey-item').on('click', function() {
			if( jQuery('.mm-survey-container').hasClass('good') ){
				jQuery('.mm-survey').addClass('okay');
			}
			else {
				jQuery('.mm-survey').removeClass('okay');	
			}
			buttonConfig();
		});
	}

	function lastPage() {
		if( jQuery('.mm-next-btn').hasClass('cool') ) {
			alert('cool');
		}
	}

	function buttonConfig() {
		if( jQuery('.mm-survey').hasClass('okay') ) {
			jQuery('.mm-next-btn button').prop('disabled', false);
		}
		else {
			jQuery('.mm-next-btn button').prop('disabled', true);
		}
	}

	function submitData() {
		jQuery('.mm-finish-btn').on('click', function() {
			collectData();
			jQuery('.mm-survey-bottom').slideUp();
			jQuery('.mm-survey-results').slideDown();
			jQuery('.logo-main').hide();
			jQuery('.mm-survey-progress').hide();
		});
	}
	function confirmtomain(){
		jQuery('.logo-main').on('click', function(){
			var tomain = confirm('정말 메인화면으로 돌아가시겠습니까?\n(진행사항이 저장되지 않습니다.)');
			if(tomain){
				location.replace('../Main/index.html');
			}
			else{
				//
			}
		});
	}

	function collectData() {
		
		var map = {};
		var answer = '';
		var total = 0;
		var ttl = 0;
		var g;
		var c = 0;
		var result_matching = [20,30,40,50,60,70];
		var result_comment = ['전공이 맞지 않는 당신, 다른 진로를 찾아보는건 어떨까요?','정해진 일만 하고 싶은 당신, 블루칼라(생산직)도 어떨까요?','하드웨어를 좋아하는 당신! 하드웨어 개발은 어떨까요?','네트워크 개발자가 되어 세상에 인터넷을 연결해 보는건 어떨까요?','돈이 많이 중요한 당신 ! 대기업은 어떨까요?','안정적인 직장을 추구하는 당신 ! 공기업은 어떨까요?'];
		var result_comment_half = ['취업하는게 아직 두렵다면 대학 진학도 고민해보세요 !','도전정신이 뛰어난 당신 ! 스타트업은 어떤가요?','하드웨어와 소프트웨어를 고루 사랑하는 당신 ! 펌웨어 개발은 어떤가요?','소프트웨어가 너무 좋은 당신 ! 소프트웨어 개발자는 어떨까요?','나라를 사랑하는 당신 ! 군/공무원은 어떨까요?','당신은 무엇이든 할 수 있어요 ! 만능입니다!!'];

		var comment_result = ["https://github.com/barry0105/INBTI/blob/main/Front-end/Picture/20~25.png?raw=true","https://github.com/barry0105/INBTI/blob/main/Front-end/Picture/30~35.png?raw=true","https://github.com/barry0105/INBTI/blob/main/Front-end/Picture/40~45.png?raw=true","https://github.com/barry0105/INBTI/blob/main/Front-end/Picture/50~55.png?raw=true","https://github.com/barry0105/INBTI/blob/main/Front-end/Picture/60~65.png?raw=true","https://github.com/barry0105/INBTI/blob/main/Front-end/Picture/70~75.png?raw=true"];
		var comment_result_half = ["https://github.com/barry0105/INBTI/blob/main/Front-end/Picture/25~30.png?raw=true","https://github.com/barry0105/INBTI/blob/main/Front-end/Picture/35~40.png?raw=true","https://github.com/barry0105/INBTI/blob/main/Front-end/Picture/45~50.png?raw=true","https://github.com/barry0105/INBTI/blob/main/Front-end/Picture/55~60.png?raw=true","https://github.com/barry0105/INBTI/blob/main/Front-end/Picture/65~70.png?raw=true","https://github.com/barry0105/INBTI/blob/main/Front-end/Picture/75~80.png?raw=true"];
		jQuery('.mm-survey-item input:checked').each(function(index, val) {
			var item;
			var data;
			var name;
			var n;
			item = jQuery(this);
			data = item.val();
			name = item.data('item');
			n = parseInt(data);
			
			total += n;
		});
		for(let i=0;i<result_matching.length;i++){
			if(total >= result_matching[i] && total < result_matching[i]+5){
				jQuery('.mm-survey-results-img').html('<img src="'+comment_result[i]+'"/><br>');
				jQuery('.mm-survey-results-text').html('<p>'+result_comment[i]+'</p>');
				break
			}
			else if((total >= result_matching[i]+5 && total < result_matching[i]+10) || total == 80){
				jQuery('.mm-survey-results-img').html('<img src="'+comment_result_half[i]+'"/><br>');
				jQuery('.mm-survey-results-text').html('<p>'+result_comment_half[i]+'</p>');
				break
			}
		}
		
	}