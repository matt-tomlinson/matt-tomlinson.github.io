$(document).ready(function () {
	$('#error').hide();
	$('#success').hide();
});

//var upload_data = function (path, data) {
//	return $.ajax({
//		type: 'PUT',
//		url: path,
//		headers: { 'x-amz-acl': 'bucket-owner-full-control' },
//		data: JSON.stringify(data)
//	});
//};

//$.fn.serializeObject = function () {
//	var o = {};
//	var a = this.serializeArray();
//	$.each(a, function () {
//		if (o[this.name] !== undefined) {
//			if (!o[this.name].push) {
//				o[this.name] = [o[this.name]];
//			}
//			o[this.name].push(this.value || '');
//		} else {
//			o[this.name] = this.value || '';
//		}
//	});
//	return o;
//};

//$('#contact-form').submit(function (event) {
//	event.preventDefault();

//	var frm = $(document.forms[0]);
//	//var data = frm.serializeObject();

//	var bucket = 'https://s3-us-west-2.amazonaws.com/contact.mattcomputerengineer.com/contact_requests/';
//	//var a = $(this).serializeArray();
//	var data = $(this).serializeObject();
//	var name = frm[0][0].value;
//	var company = frm[0][1].value;
//	// This is where you would disable the form and start a spinner
//	var path = bucket + company + "_" + name + ".json";
//	$.when(upload_data(path, data))
//		.done(function (r1) {
//			if (!r1[0]) {
//				console.log('Upload complete!');
//				// Stop that spinner, let the user know.
//			} else {
//				// One of the ajax calls failed.
//				console.log(r1);
//				console.log(r2);
//			}
//		});
//});

function submitToAPI(e) {
	e.preventDefault();
	var URL = "https://qkzzxavduk.execute-api.us-west-2.amazonaws.com/StageOne";

	var Namere = /[A-Za-z]{1}[A-Za-z]/;
	if (!Namere.test($("#name").val())) {
		alert("Name can not less than 2 char");
		return;
	}

	if ($("#email").val() === "") {
		alert("Please enter your email.");
		return;
	}

	var reeamil = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
	if (!reeamil.test($("#email").val())) {
		alert("Please enter valid email address");
		return;
	}

	var name = $("#name").val();
	var company = $("#company").val();
	var email = $("#email").val();
	var message = $("#message").val();
	var data = {
		name: name,
		company: company,
		email: email,
		message: message
	};

	$.ajax({
		type: "POST",
		url: URL,
		dataType: "json",
		crossDomain: "true",
		contentType: "application/json; charset=utf-8",
		data: JSON.stringify(data),


		success: function () {
			$('#error').hide();
			$('#success').show();
			document.getElementById("contact-form").reset();
			//location.reload();
		},
		error: function () {
			$('#error').show();
			$('#success').hide();
		}
	});
}

