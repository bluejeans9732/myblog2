export default function SearchBar({ onSearch }) {
    return (
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <input 
                className="p-2 mb-4 bg-white rounded-lg border border-gray-200 shadow-md" 
                style={{ outline: "none" }}
                onChange={(e) => onSearch(e.target.value)}
                placeholder="검색"
            />
        </div>
    )
}