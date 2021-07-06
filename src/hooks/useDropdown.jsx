import { useState } from 'react';
export default function useDropdown() {
	const [menu, setMenu] = useState(false);
	const toggle = () => setMenu(!menu);
	return {
		menu,
		toggle,
	};
}
