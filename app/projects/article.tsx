import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";

type Props = {
	project: Project;
};

// Función helper para formatear fechas correctamente
const formatDate = (date: string | Date | null | undefined) => {
	if (!date) return 'Fecha no disponible';
	
	try {
		let dateObj;
		if (typeof date === 'string') {
			dateObj = new Date(date + 'T12:00:00');
		} else {
			dateObj = new Date(date);
		}
		
		if (isNaN(dateObj.getTime())) {
			console.error('Invalid date:', date);
			return 'Fecha inválida';
		}
		
		return Intl.DateTimeFormat('es-ES', { dateStyle: "medium" }).format(dateObj);
	} catch (error) {
		console.error('Error formatting date:', date, error);
		return 'Error en fecha';
	}
};

const getDateISO = (date: string | Date | null | undefined) => {
	if (!date) return '';
	
	try {
		let dateObj;
		if (typeof date === 'string') {
			dateObj = new Date(date + 'T12:00:00');
		} else {
			dateObj = new Date(date);
		}
		
		if (isNaN(dateObj.getTime())) {
			console.error('Invalid date for ISO:', date);
			return '';
		}
		
		return dateObj.toISOString().split('T')[0];
	} catch (error) {
		console.error('Error getting ISO date:', date, error);
		return '';
	}
};

export const Article: React.FC<Props> = ({ project }) => {
	return (
		<Link href={`/projects/${project.slug}`}>
			<article className="p-4 md:p-8">
				<div className="flex items-center gap-2">
				<div
							className={`w-2 h-2 rounded-full ${
								project.live 
									? 'bg-green-500' 
									: 'bg-gray-500'
							}`}
							title={project.live ? 'En vivo' : 'No disponible'}
						/>
					<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
					{project.title}
				</h2>
				</div>
				
				<p className="z-20 mt-4 text-sm  duration-1000 text-zinc-400 group-hover:text-zinc-200">
					{project.description}
				</p>
			</article>
		</Link>
	);
};
