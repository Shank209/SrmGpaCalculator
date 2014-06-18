var rows=0;

$(document).ready(function() {
	while(rows<10)
	{
		rows++;
		
		$('table').append('<tr> <td>' + rows + '</td> <td> <input type="text" id="cr' + rows + '" /> </td> <td> <input type="text" id="gr' + rows + '" /> </td> </tr>');
	}
});

$('#add').click(function() {
	rows++;
	
	$('table').append('<tr> <td>' + rows + '</td> <td> <input type="text" id="cr' + rows + '" /> </td> <td> <input type="text" id="gr' + rows + '" /> </td> </tr>');
});

$('#buttons input').hover(function() {
	$(this).css('color','#b94629');
}, function() {
	$(this).css('color','#2b2b2b');
});

var grades = new Array(28), grade_values = new Array(28);

grades[0]="A+";grades[1]="a+";

grades[2]="A";grades[3]="a";

grades[4]="A-";grades[5]="a-";

grades[6]="B+";grades[7]="b+";

grades[8]="B";grades[9]="b";

grades[10]="B-";grades[11]="b-";

grades[12]="C+";grades[13]="c+";

grades[14]="C";grades[15]="c";

grades[16]="C-";grades[17]="c-";

grades[18]="D";grades[19]="d";

grades[20]="E";grades[21]="e";

grades[22]="*";grades[23]="*";

grades[24]="I";grades[25]="i";

grades[26]="U";grades[27]="u";

grades[28]="W";grades[29]="w";

/****************************/

grade_values[0]=10;grade_values[1]=10;

grade_values[2]=9.5;grade_values[3]=9.5;

grade_values[4]=9;grade_values[5]=9;

grade_values[6]=8.5;grade_values[7]=8.5;

grade_values[8]=8;grade_values[9]=8;

grade_values[10]=7.5;grade_values[11]=7.5;

grade_values[12]=7;grade_values[13]=7;

grade_values[14]=6.5;grade_values[15]=6.5;

grade_values[16]=6;grade_values[17]=6;

grade_values[18]=5;grade_values[19]=5;

grade_values[20]=4;grade_values[21]=4;

grade_values[22]=0;grade_values[23]=0;

grade_values[24]=0;grade_values[25]=0;

grade_values[26]=0;grade_values[27]=0;

grade_values[28]=0;grade_values[29]=0;

function calculate()
{
	var sum=0, cr_sum=0, i=1, j, credits, gr_ob;
	
	while(i<=rows)
	{
		if(($('#cr'+i).val()=='' && $('#gr'+i).val()!='') || ($('#cr'+i).val()!='' && $('#gr'+i).val()==''))
		{
			$('#message').text("Subject " + i + "'s row is incomplete. Please correct that and try again.");
			
			$('#message').slideDown(250);
			
			break;
		}
		
		else if($('#cr'+i).val()!='' && $('#gr'+i).val()!='')
		{
			credits = $('#cr'+i).val(); 
			
			if(isNaN(credits))
			{
				$('#message').text("Subject " + i + "'s data is invalid. Please correct that and try again.");
			
				$('#message').slideDown(250);
			
				break;
			}
			
			credits=parseInt(credits);
			
			gr_ob = $('#gr'+i).val();
		
			for(j=0;j<30;j++)
			{
				if(gr_ob==grades[j])
				{
					sum+=credits*grade_values[j];
					
					cr_sum+=credits;
					
					break;
				}
			}
			
			if(j==30||credits<1||credits>4)
			{
				$('#message').text("Subject " + i + "'s data is invalid. Please correct that and try again.");
			
				$('#message').slideDown(250);
			
				break;
			}
		}
		
		i++;
	}
	
	if(i==rows+1)
	{
		if(cr_sum==0)
		{
			gpa=0;
		}
		else
		{
			gpa=sum/cr_sum;
		}
	
		$('#message').text("Your GPA is "+gpa);
			
		$('#message').slideDown(250);
	}
}

function hide()
{
	$('#message').html('');
	
	$('#message').slideUp(250);
}