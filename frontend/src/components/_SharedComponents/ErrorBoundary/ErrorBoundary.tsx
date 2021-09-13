import React from "react";
class ErrorBoundary extends React.Component<{}, any> {
	constructor(props: any) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: any) {
		return { hasError: true };
	}

	componentDidCatch(error: any, errorInfo: any) {
		console.error(error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div style={{ fontSize: "2rem", width: "100%", textAlign: "center" }}>
					🥺
				</div>
			);
		}

		return this.props.children;
	}
}
export default ErrorBoundary;
