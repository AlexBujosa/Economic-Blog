import React, { useState } from 'react';
import Select from 'react-select';
import { useForm, Controller } from 'react-hook-form';
import './styles.css';
import { TbUpload } from 'react-icons/tb';

const options = [
	{ value: 'Mercado Financiero', label: 'Mercado Financiero' },
	{ value: 'Global', label: 'Global' },
	{ value: 'Políticas Económicas', label: 'Políticas Económicas' },
	{ value: 'Finanzas', label: 'Finanzas' },
	{ value: 'Turismo', label: 'Turismo' },
];

const Upload = () => {
	const [selectedOption, setSelectedOption] = useState(options[1]);
	const { control, register, handleSubmit } = useForm();

	const onSubmit = async (data) => {
		const formData = new FormData();
		formData.append('postedBy', data.postedBy);
		formData.append('title', data.title);
		formData.append('category', data.category.value);
		formData.append('image', data.image[0]);
		formData.append('description', data.description);

		const res = await fetch(
			'https://economic-blog-backend.up.railway.app/api/articles',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((res) => res.json())
			.then(() => {
				window.location.href = 'https://economic-blog-oduranc.vercel.app/';
			});
	};

	return (
		<div className="upload">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="title-news">
					<input
						type="text"
						id=""
						className="input-title"
						defaultValue={localStorage.getItem('username')}
						{...register('postedBy')}
					/>
					<p>Título</p>{' '}
					<input
						type="text"
						id=""
						className="input-title"
						{...register('title')}
					/>
				</div>
				<div className="container-options">
					<div className="select-container">
						<Controller
							name="category"
							defaultValue={selectedOption}
							control={control}
							render={({ field }) => (
								<Select
									defaultValue={selectedOption}
									options={options}
									{...field}
								/>
							)}
						/>
					</div>
					<div className="upload-img">
						<TbUpload style={{ paddingRight: '10px' }} size={35} />
						<input
							className="img-news"
							type="file"
							accept="image/*"
							id="img"
							{...register('image')}
						/>
					</div>
				</div>
				<div>
					<textarea
						className="body-news"
						id=""
						cols="130"
						rows="25"
						placeholder="Ingrese el texto"
						{...register('description')}
					></textarea>
				</div>
				<button type="submit" className="btn-news">
					Subir
				</button>
			</form>
		</div>
	);
};

export default Upload;
