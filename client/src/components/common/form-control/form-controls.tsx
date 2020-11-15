import React from 'react'


// @ts-ignore
const FieldCreator = ({input, child, meta, ...props}) => {
	const hasError = meta.touched && meta.error
	return (
		<div>
			<div> {props.children} </div>
			<div> {hasError && <span>{meta.error}</span>} </div>
		</div>
	)
}

export const Textarea = (props: any) => {
	const {input, meta, child, ...restProps} = props;
	return <FieldCreator {...props}>
		<textarea {...input} {...restProps}/>
	</FieldCreator>
}

export const Input = (props: any) => {
	const {input, meta, child, ...restProps} = props;
	return <FieldCreator {...props}>
		<input {...input} {...restProps}/>
	</FieldCreator>
}