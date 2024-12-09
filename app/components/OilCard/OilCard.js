
import "./style.css"


export default function OilCard({ title, subtitle }) {
    return (
        <article className={` oil-card`}>
            <p className="oil-title py-[50px] flex items-center justify-start">
                <svg className="mr-[10px]" xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                    <path d="M22.2613 11.1222V12.0054C22.2601 14.0755 21.5898 16.0899 20.3502 17.7479C19.1107 19.406 17.3685 20.619 15.3832 21.2059C13.398 21.7929 11.2762 21.7224 9.33437 21.005C7.39249 20.2876 5.73454 18.9616 4.6078 17.225C3.48106 15.4884 2.94588 13.434 3.08209 11.3682C3.21829 9.30258 4.0186 7.33627 5.36363 5.76259C6.70865 4.1889 8.52635 3.09217 10.5457 2.63594C12.5649 2.17971 14.6775 2.38844 16.5685 3.231M22.2613 4.3199L12.6613 13.9295L9.78128 11.0495" stroke="#FFF0F0" stroke-width="1.92" stroke-linecap="round" stroke-linejoin="round" />
                </svg> <span>{title}</span>
            </p>
            <p className="oil-subtitle">
                {subtitle}
            </p>
        </article>
    )
}