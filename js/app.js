
var MessageDot = React.createClass({
	render:function(){
		return ({
			<div style={{width:50px;height:50px;backgroundColor:#eee;borderRadius:6px;position:relative}}>
				<div style={{width:10px;height:10px;backgroundColor:red;borderRadius:50%;position:absolute;right:-5px;top:-5px;}}></div>
			</div>
		})
	}
})

